import React, { useState } from 'react'
import { Alert, Button, Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircle";


export const AlertButton = () => {
    const [showAlert,setShowAlert] = useState(false)

    const handleclick =()=>{
        setShowAlert(true)
    }
    
    setTimeout(() => {
        setShowAlert(false)
    }, 4000);

  return (
     <Stack spacing={2} sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 5 }}>
      <Button variant="contained" color="primary" onClick={handleclick}>
        Submit / Show Success Alert
      </Button>

      {showAlert && (
        <Alert
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          onClose={() => setShowAlert(false)}
        >
          ✅ Your action was successful!
        </Alert>
      )}
    </Stack>
  )
}
