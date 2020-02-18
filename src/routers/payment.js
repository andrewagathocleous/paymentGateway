const express = require('express')
const paymentsRepository = require('../models/Payment')
const auth = require('../middleware/auth')

const paymentsRouter = express.Router()

/**
 * List Payments
 */
paymentsRouter.get('/payments', auth, async(req, res) => {

    const payments = await paymentsRepository.list();

    res.json(payments);
    res.send();
})

/**
 * Get Payment By Id
 */
paymentsRouter.get('/payments/:id', auth, async(req, res) => {
    
    const payments = await paymentsRepository.get(req.params['id']);

    res.json(payments);
    res.send();
})

/**
 * Create Payment
 */
paymentsRouter.post('/payments', auth, async(req, res) => {
    
    const payment = await paymentsRepository.create(req.body);
    res.status(201).json(payment);
})

/**
 * Approve Payment
 */
paymentsRouter.put('/payments/:id/approve', auth, async(req, res) => {
    
    var paymentId = req.params.id;    

    const payment = await paymentsRepository.get(paymentId);
    
    if (payment.status === "cancelled") {
        throw new Error({error: 'Cannot approve a payment that has already been cancelled'})
    }
    
    const aprovePayment = await paymentsRepository.updateStatus("approved", payment);
    res.status(200).json(aprovePayment);
})

/**
 * Cancel Payment
 */
paymentsRouter.put('/payments/:id/cancel', auth, async(req, res) => {
    
    var paymentId = req.params.id;    

    const payment = await paymentsRepository.get(paymentId);
    
    if (payment.status === "approved") {
        throw new Error({error: 'Cannot cancel a payment that has already been approved'})
    }
    
    const aprovePayment = await paymentsRepository.updateStatus("cancelled", payment);
    res.status(200).json(aprovePayment);
})

module.exports = paymentsRouter