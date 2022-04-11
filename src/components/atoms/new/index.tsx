import React from 'react';

export interface NewProps {
  children?: React.ReactNode;
}

export const New: React.FC<NewProps> = () => (
  <div className="a-new">
    <h1>New</h1>
  </div>
);
