import { module, test } from 'qunit';
import { setupRenderingTest } from 'min-ember-repro/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | box', function (hooks) {
  setupRenderingTest(hooks);

  test('it should call both event listeners', async function (assert) {
    this.onClickHandler = () => {
      console.log('onClickHandler has fired');
      assert.step('onClickHandler has fired');
    };

    await render(hbs`
      <Box @onClickHandler={{this.onClickHandler}} />
    `);

    /**
     *  This test will pass, but if you uncomment the line below and
     *  click on the box yourself, the `onClickHandler` will not be fired.
     *
     *  await this.pauseTest();
     */

    await click('#box');
    assert.dom('#box').doesNotExist();
    assert.verifySteps(['onClickHandler has fired']);
  });
});
