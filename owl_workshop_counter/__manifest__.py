# -*- coding: utf-8 -*-
{
    'name': "Owl Workshop Hooks",
    'summary': """Owl Workshop""",
    'description': """useState, onWillStart, useEffect, useRef""",
    'author': "Krypton",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials',
    'version': '0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'sale_management'],
    'data': [
        'views/client_action.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_workshop_counter/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}
