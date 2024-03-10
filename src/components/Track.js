import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DonationTrackingPage() {
  const [donationId, setDonationId] = React.useState('');
  const [trackingInfo, setTrackingInfo] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleTrackDonation = () => {
    // Simulate fetching tracking information from an API
    // Replace this with your actual API call
    fetch(`your-api-url/${donationId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tracking information');
        }
        return response.json();
      })
      .then(data => {
        setTrackingInfo(data);
        setError(null);
      })
      .catch(error => {
        setTrackingInfo(null);
        setError(error.message);
      });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Donation Tracking
      </Typography>
      <TextField
        id="donation-id"
        label="Donation ID"
        variant="outlined"
        value={donationId}
        onChange={(e) => setDonationId(e.target.value)}
        sx={{ mb: 2 }}
      />
      <br></br>
      <Button variant="contained" onClick={handleTrackDonation}>
        Track Donation
      </Button>
      {trackingInfo && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Tracking Information:</Typography>
          <Typography variant="body1">
            {/* Display the tracking information here */}
            {/* Example: trackingInfo.trackingNumber, trackingInfo.deliveryStatus, etc. */}
          </Typography>
        </Box>
      )}
      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 3 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
