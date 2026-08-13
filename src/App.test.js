import { render } from '@testing-library/react';
import SEO from './components/SEO';
import { LanguageProvider } from './context/LanguageContext';

test('renders the Arabic SEO metadata and structured data', () => {
  render(
    <LanguageProvider>
      <SEO />
    </LanguageProvider>
  );

  expect(document.title).toContain('زاد المسلم');
  expect(document.getElementById('application-schema')).toHaveTextContent('MobileApplication');
  expect(document.getElementById('faq-schema')).toHaveTextContent('FAQPage');
});
