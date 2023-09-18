const Order = require("../models/Order");

const addNewOrder = async (req, res) => {
    try {
        const { customer, orderList } = req.body
        let newList = []
        const orderFound = await Order.findOne({ customer, status: "pending" })
        if (!orderFound) {
            const newOrder = new Order(req.body)
            await newOrder.save();
            return res.status(200).json({ message: 'New order added Succesfully', newOrder })
        } else {
            orderFound.orderList= [...orderFound.orderList, ...orderList]
            for (let i = 0; i < orderFound.orderList.length; i++) {
                for (let j = i+1; j < orderFound.orderList.length; j++) {
                    if(orderFound.orderList[i].styleId.toString() === orderFound.orderList[j].styleId.toString() && orderFound.orderList[i].volume === orderFound.orderList[j].volume){
                        newList.push(
                            {
                                styleId: orderFound.orderList[i].styleId.toString(), 
                                styleName: orderFound.orderList[i].styleName, 
                                volume: orderFound.orderList[i].volume, 
                                _id: orderFound.orderList[i]._id.toString(), 
                                quantity:parseInt(orderFound.orderList[i].quantity)+parseInt(orderFound.orderList[j].quantity)
                            })
                    }
                }
            }
            for (const order of orderFound.orderList) {
                const found = newList.find(i => i.styleId.toString() === order.styleId.toString() && i.volume === order.volume)
                if (!found) {
                    newList.push({
                        styleId: order.styleId.toString(), 
                                styleName: order.styleName, 
                                volume: order.volume, 
                                _id: order._id.toString(), 
                                quantity: order.quantity
                    })
                }
            }
            }
            const orderUpdate = await Order.findByIdAndUpdate(orderFound._id, { orderList: newList }, { new: true });
            return res.status(200).json({ message: 'Order updated succesfully', orderUpdate });
        
    }
    catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const getPendingOrders = async (req, res) => {
    try {
        const ordersList = await Order.find({ status: "pending" }).populate("customer");
        res.status(200).json({ message: 'Orders obtained correctly', ordersList })
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const cancelOrder = async(req, res) => {
    try {
        const {id} = req.params;
        const orderToCancel = await Order.findByIdAndUpdate({ _id : id }, { status: "cancel" }, {new:true});
        res.status(200).json({message: 'Order cancelled correctly', orderToCancel})
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}

const statusItemChange = async(req, res) => {
    try {
        const {customer, styleId, volume} = req.body
        let itemFound = false
        const orderFound = await Order.findOne({customer, status: "pending"})
        if (orderFound) {
            const newOrderList= orderFound.orderList.map((item) => {
                if (item?.styleId?.toString() === styleId && item.volume === volume) {
                    if (item.delivered + 1 <= item.quantity) {
                        itemFound= true
                        return {
                            styleId: item.styleId,
                            styleName: item.styleName,
                            volume: item.volume,
                            quantity: item.quantity,
                            delivered: item.delivered + 1,
                            _id: item._id        
                        }
                    } return item
                } else return item
            })
            if (itemFound) {
                const itemPending = newOrderList.find(item => item.delivered !== item.quantity)
                if(!itemPending){
                    const orderUpdated = await Order.findOneAndUpdate({customer, status: "pending"}, {orderList: newOrderList, status: "delivered"}, {new:true})
                    return res.status(200).json({message: 'Order completely delivered', orderUpdated})
                }else {
                    const orderUpdated = await Order.findOneAndUpdate({customer, status: "pending"}, {orderList: newOrderList}, {new:true})
                    return res.status(200).json({message: 'Order updated correctly', orderUpdated})
                }
            } else return res.status(400).json({message: 'Item delivered but not ordered'})
        } else return res.status(400).json({message: 'Item delivered but not ordered'})
    } catch (error) {
        res.status(error.code || 500).json({ message: error.message })
    }
}



module.exports = {
    addNewOrder,
    getPendingOrders,
    cancelOrder,
    statusItemChange
}
