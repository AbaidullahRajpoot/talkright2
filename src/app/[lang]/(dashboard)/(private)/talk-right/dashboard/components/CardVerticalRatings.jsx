// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const CardVerticalRatings = () => {
  return (
    <Card>
      <CardContent>
        <div className='flex flex-col items-center flex-wrap gap-x-2 gap-y-1 mbe-2'>
          <Typography className="mbe-2" variant='h5' >
            Survey Overview
          </Typography>
          <Typography variant='h2' className="mbe-2">
            4.0
          </Typography>
          <Rating name='read-only' value={4} readOnly />
        </div>
        <div className='my-8'>
          <Typography className="my-5" variant='h6' >
            Rating Breakdown
          </Typography>
          <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2 justify-between'>
            <Typography>Call experience Rated</Typography>
            <Typography>★4.7</Typography>
          </div>
          <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2 justify-between'>
            <Typography>Customer Satisfaction Rating</Typography>
            <Typography>★3.2</Typography>
          </div>
          <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2 justify-between'>
            <Typography>Call Quality Feedback</Typography>
            <Typography>★4.2</Typography>
          </div>
          <div className='flex flex-wrap gap-x-2 gap-y-1 mbe-2 justify-between'>
            <Typography>Overall Call Satisfaction</Typography>
            <Typography>★3.9</Typography>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}

export default CardVerticalRatings
