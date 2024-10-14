# -*- coding: utf-8 -*-
{
    'name': "Owl Workshop Patch",
    'summary': """Owl Workshop Patch""",
    'description': """Owl Workshop Patch""",
    'author': "Krypton",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials',
    'version': '0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'owl_workshop'],
    'data': [
        # 'views/client_action.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_workshop_patch/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}
