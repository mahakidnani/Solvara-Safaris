import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gold text-primary-dark hover:bg-gold-rich border border-gold hover:border-gold-rich',
  outline: 'bg-transparent text-gold border border-gold hover:bg-gold hover:text-primary-dark',
  ghost: 'bg-transparent text-text-primary hover:text-gold border-transparent',
};

const sizes = {
  sm: 'px-6 py-3 text-xs',
  md: 'px-8 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = clsx(
    'inline-flex items-center justify-center uppercase tracking-widest font-medium transition-all duration-300 rounded-full',
    variants[variant],
    sizes[size],
    className
  );

  const MotionLink = motion.create(Link);
  const MotionA = motion.create('a');

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <MotionA
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
