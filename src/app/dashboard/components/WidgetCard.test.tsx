import { render } from '@testing-library/react';

import WidgetCard from './WidgetCard.tsx';
import { axe } from 'jest-axe';

describe('WidgetCard', () => {
  it('should pass accessibility checks using axe (~30% detection rate)', async () => {
    const { container } = render(
      <WidgetCard
        logoSrc="./Weather.svg"
        heading="Weather"
        imageAlt="image of a cloud"
        info="Storm approaching in 3 days."
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
