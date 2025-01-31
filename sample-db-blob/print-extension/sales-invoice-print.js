const viewData = {
    id: 'example-sales-invoice-print',
    label: 'Print',
    link: '/services/ts/sample-db-blob/print-extension/api/SalesInvoiceTemplateService.ts/5',
    perspective: 'salesinvoice',
    view: 'SalesInvoice',
    type: 'entity',
    order: 30
};

if (typeof exports !== 'undefined') {
    exports.getDialogWindow = function () {
        return viewData;
    }
}