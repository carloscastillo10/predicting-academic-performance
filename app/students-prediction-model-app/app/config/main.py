from decouple import config
import os


class Config:
    base_dir = os.path.dirname(os.path.dirname(__file__))
    SECRET_KEY = config('SECRET_KEY')


class ProductionConfig(Config):
    DEBUG = False
    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_DURATION = 3600


class DevelopmentConfig(Config):
    DEBUG = True


config_dict = {
    'Production': ProductionConfig,
    'Development': DevelopmentConfig
}
