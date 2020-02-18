const uuidv4 = require('uuid/v4');
const moment = require('moment');

var repository = {
  payments: [
    {
      id: '9781bd16-8221-4eb6-a37f-2eb60acc1338',
      payeeId: 'a5b500e3-2ba7-4623-baa2-e09b6a721b53',
      payerId: 'd8f090ae-a4ed-42dc-9181-f51564d0e304',
      paymentSystem: 'yandexMoney',
      paymentMethod: 'PMB',
      amount: 1337.01,
      currency: 'RUB',
      status: 'created',
      comment: null,
      created: '2018-03-09T09:26:44+02:00',
      updated: '2018-03-09T09:26:44+02:00'
    },
    {
      id: '9781bd16-8221-4eb6-a37f-2eb60acc1339',
      payeeId: 'a5b500e3-2ba7-4623-baa2-e09b6a721b54',
      payerId: 'd8f090ae-a4ed-42dc-9181-f51564d0e304',
      paymentSystem: 'yandexMoney',
      paymentMethod: 'PMB',
      amount: 1337.02,
      currency: 'RUB',
      status: 'created',
      comment: null,
      created: '2018-04-09T09:26:44+02:00',
      updated: '2018-04-09T09:26:44+02:00'
    }]
};

/**
 * 
 * @param {*} userId 
 */
function list() {    
  const result = JSON.parse(JSON.stringify(repository.payments));
  return result ? Promise.resolve(result) : Promise.reject('Error');
}

/**
 * 
 * @param {*} paymentId 
 */
function get(paymentId) {
  var payments = repository.payments.filter(function (savedPayment) {
    return (savedPayment.id === paymentId);
  });
  const result = JSON.parse(JSON.stringify(payments));
  return result[0] ? Promise.resolve(result[0]) : Promise.reject('Error');
}

/**
 * 
 * @param {*} status 
 * @param {*} payment 
 */
function updateStatus(status, payment) {
  repository.payments = repository.payments.filter(function (savedPayment) {
    return (savedPayment.id === payment.id);
  });
 
  payment.updated = moment().format();
  payment.status = status;
  const result = JSON.parse(JSON.stringify(payment));
  return repository.payments.push(payment) ? Promise.resolve(result) : Promise.reject('Error');
}

/**
 * 
 * @param {*} payment 
 */
function create(payment) {
  var savePayment = payment;
  savePayment.id = uuidv4();
  savePayment.status = "created";
  savePayment.created = moment().format();
  savePayment.updated = moment().format();
  const result = JSON.parse(JSON.stringify(savePayment));
  return repository.payments.push(savePayment) ? Promise.resolve(result) : Promise.reject('Error');
}

module.exports = paymentsRepository = {
  list,
  get,
  updateStatus,
  create
};