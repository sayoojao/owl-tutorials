# -*- coding: utf-8 -*-
{
    'name': "Owl Workshop",
    'summary': """Owl Workshop""",
    'description': """Owl Workshop""",
    'author': "Krypton",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials',
    'version': '0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'mail', 'crm'],
    'data': [
        'views/client_action.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_workshop/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}
