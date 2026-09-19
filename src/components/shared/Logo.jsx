
import logoImg from '../../assets/xplore360.png';

export default function Logo({ className = '' }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 no-underline ${className}`}>
      <img
        src={logoImg}
        alt="Xplore 360"
        className="h-15 w-auto object-contain block sm:h-11"
      />
    </a>
  );
}