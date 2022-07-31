import { Box, Button, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';

const Applicant = ({ data, onClickEdit, onClickDelete }) => {
    return <Card>

        <CardHeader title={data.name} />

        <Divider />

        <CardContent>
            <Typography>
                Phone number: {data.phoneNumber}
            </Typography>

            <Typography>
                Degree: {data.degree}
            </Typography>

            <Typography>
                Percent: {data.percent}
            </Typography>

            <Typography>
                Course: {data.course}
            </Typography>

            <Typography>
                Status: {data.status}
            </Typography>

        </CardContent>

        <Box mb={2} ml={2}>
            <Button
                startIcon={<EditOutlined />}
                variant='outlined'
                onClick={onClickEdit}
            >
                Update
            </Button>
            <Button
                sx={{ ml: 1 }}
                startIcon={<DeleteForeverOutlined />}
                variant='contained'
                color='warning'
                onClick={onClickDelete}
            >
                Delete
            </Button>
        </Box>
    </Card>;
}

export default Applicant;