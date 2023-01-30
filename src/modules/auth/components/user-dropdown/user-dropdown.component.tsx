import { ReactComponent as UserSolidIcon } from '@app/assets/icons/user-solid.svg';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { FC, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from '../../hooks/use-auth-state';
import { UserDropdownLink } from '../user-dropdown-link/user-dropdown-link.component';

interface UserDropdownProps {}

export const UserDropdown: FC<UserDropdownProps> = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDownState = () => setIsDropDownOpen(p => !p);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    if (!isDropDownOpen) {
      return;
    }

    toggleDropDownState();
  });

  const {logout} = useAuthState()

  const handleLogout = () => {
    toggleDropDownState();
    logout()
    toast.success('Нам дуже прикро, що Ви покидаєте нас 😥', {autoClose: 2000});
  };

  return (
    <div className="relative h-6">
      <button onClick={toggleDropDownState}>
        <UserSolidIcon className="w-6 h-6 fill child-path:fill-gray-900" />
      </button>
      {isDropDownOpen && (
        <div className="absolute right-0 top-7.5 bg-white border border-gray-200 shadow-lg rounded-md py-1.5 w-49">
          <UserDropdownLink to="/profile" onClick={toggleDropDownState}>
            Ваш профіль
          </UserDropdownLink>
          <UserDropdownLink onClick={handleLogout}>Вийти</UserDropdownLink>
        </div>
      )}
    </div>
  );
};
