/**
 * Partner With Us — standalone page linked from the navbar CTA.
 * Re-uses the Partners page form section with a focused layout.
 */
import { Link } from 'react-router-dom';
import Partners from './Partners';

export default function PartnerWithUs() {
  // The Partners page already contains the full partnership content and form.
  return <Partners />;
}
