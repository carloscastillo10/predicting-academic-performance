from flask import Blueprint

blueprint = Blueprint(
    'random_forest',
    __name__,
    url_prefix='',
)