import React from 'react';
import { ICategory } from 'src/model/iCategory';
export interface DirectoryItemProps {
  directory: ICategory;
}

export const DirectoryItem: React.FC<DirectoryItemProps> = ({ directory }) => (
  <li className="a-directory-item">
    <img className="a-directory-item__image" src={directory.imageUrl} />
    <div className="a-directory-item__body">
      <h2>{directory.title}</h2>
      <p>Shop Now</p>
    </div>
  </li>
);
