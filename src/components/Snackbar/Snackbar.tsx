import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';

const SnackbarComponent: FC = () => {
  const open = false;

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      // await request(currentPage);
      setIsRefreshing(false);
    }
  };

  // const message = (
  //   <>
  //     <p>CODE: {code}</p>
  //     <p>MSG: {msg}</p>
  //     <p>STATUS: {status}</p>
  //     <button onClick={handleRefresh}>перезагрузить запрос</button>
  //   </>
  // );

  return (
    <Box sx={{ width: open ? 500 : 0 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => {}}
      />
    </Box>
  );
};

export default SnackbarComponent;
