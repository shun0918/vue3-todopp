import { mount } from '@vue/test-utils';
import InputTextButton from '@src/components/atoms/InputTextButton.vue';

test('input value', () => {
  const wrapper = mount(InputTextButton, {
    props: {
      buttonName: 'button Name',
    },
  });

  expect(wrapper.get('[test-data="submitButton"]').text()).toContain('buttonName');
});
