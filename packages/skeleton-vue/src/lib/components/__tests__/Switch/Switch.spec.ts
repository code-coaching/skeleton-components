import { describe, expect, it } from 'vitest';

import { Switch } from '../../..';
import { mount } from '@vue/test-utils';

describe('Switch', () => {
  it('renders properly', () => {
    const wrapper = mount(Switch, { props: { id: 'test-id', name: 'test-name' } });
    const button = wrapper.find('[data-testid="switch"]');
    expect(button.classes()).toContain('preset-filled-surface-200-800');
  });

  describe('given checked', () => {
    it('should render properly', () => {
      const wrapper = mount(Switch, { props: { id: 'test-id', name: 'test-name', checked: true } });
      const button = wrapper.find('[data-testid="switch"]');
      expect(button.classes()).toContain('preset-filled-primary-500');
    });
  });
});
