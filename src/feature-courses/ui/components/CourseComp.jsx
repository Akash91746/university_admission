import React from 'react';

import { Box, Card, CardContent, CardHeader, Typography, Divider, Button } from '@mui/material';
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';

const CourseComp = ({ data, onClickDelete, onClickEdit }) => {

    return <Card>
        <CardHeader title={data.title} />

        <Divider />

        <CardContent>

            <Box mt={2}>
                <Typography>
                    Start Date - {data.startDate.toDateString()}
                </Typography>

                <Typography>
                    End Date - {data.endDate.toDateString()}
                </Typography>

                <Typography>
                    Fees - {data.fees}
                </Typography>
            </Box>
        </CardContent>


        <Box mb={2} ml={2}>
            <Button
                startIcon={<EditOutlined />}
                variant='outlined'
                onClick={onClickEdit}
            >
                Edit
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

    </Card>
}

export default CourseComp;