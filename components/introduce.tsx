import React from 'react';

export default function Introduce({
  children,
  className,
}: {
  children: React.ReactNode | null;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center py-10`}>
      <div className={`${className} max-w-lg space-y-4 py-2 text-center`}>{children}</div>
    </div>
  );
}

