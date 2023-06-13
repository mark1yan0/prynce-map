import useSidebar from '../../../Contexts/SidebarContext';
import config from '../../../lib/config';
import { HamburderIcon } from '../../SvgIcons';

const OpenSidebarButton = () => {
  const { openSidebar } = useSidebar();
  return (
    <button
      className='absolute bg-gray-50 right-2 top-2 p-2 rounded border-2 border-black/20'
      onClick={openSidebar}
      style={{
        zIndex: config.topZindex + 10,
      }}
    >
      <HamburderIcon />
    </button>
  );
};

export default OpenSidebarButton;
