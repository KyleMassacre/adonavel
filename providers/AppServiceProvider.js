'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class AppServiceProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {

  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    const Config = use('Config')
    const View = use('View')
    View.global('config', function (key) {
      return Config.get(key)
    })
  }
}

module.exports = AppServiceProvider
