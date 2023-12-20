import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps() {
  const [isMasterChecked, setMasterChecked] = React.useState(false);
  const [controlsSet, setControlsSet] = React.useState(false);

  const handleSetSettings = () => {
    setControlsSet(true);

    // You can add additional logic here to save the settings or perform other actions
  };

  return (
    <Box sx={{ width: 300 }}>
      <Stack spacing={2}>
        <div>
          <label>Temperature Slider</label>
        </div>
        <Slider
          aria-label="Small steps"
          defaultValue={12.0}
          getAriaValueText={valuetext}
          step={0.5}
          marks
          min={5.0}
          max={35.0}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}°C`}
          sx={{
            pointerEvents: isMasterChecked ? 'none' : 'auto',
            filter: isMasterChecked ? 'grayscale(100%)' : 'none',
          }}
        />
      </Stack>

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isMasterChecked}
              onChange={(e) => setMasterChecked(e.target.checked)}
              color="primary"
            />
          }
          label="Check to unlock specific controls"
        />
        <FormControlLabel
          control={
            <Switch
              defaultChecked={false}
              disabled={!isMasterChecked}
            />
          }
          label="Lamp Switch"
        />

        <FormControlLabel
          control={
            <Switch
              defaultChecked={false}
              disabled={!isMasterChecked}
            />
          }
          label="Fan Switch"
        />
      </FormGroup>

      <Button onClick={handleSetSettings} variant="contained" color="primary">
        Set settings
      </Button>

      {controlsSet && (
        <Typography sx={{ color: 'green', marginTop: 2 }}>
          Controls are set
        </Typography>
      )}
    </Box>
  );
}
