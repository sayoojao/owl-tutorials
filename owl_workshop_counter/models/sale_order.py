from odoo import api, fields, models


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    @api.model
    def get_data(self, args):
        print(args, 'args>>>>>>>>>>>>')
        sale_order_ids = self.search([])
        return sale_order_ids
