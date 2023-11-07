import { AspectRatio, Grid } from '@mui/joy'
import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { Form, useForm } from 'react-hook-form'
import { HorizontalStepperContext } from '../HorizontalStepper';

const TypographyStyle = styled(Typography)(() => ({
  fontStyle: 'italic',
  color: 'red',
  fontSize: 11,
}));

const ProjectDetailPanel = () => {
  const { ratio } = useContext(HorizontalStepperContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    reValidateMode: 'onBlur'
  });

  return (
    <Box my={2} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <AspectRatio ratio={ratio} sx={{ width: "100%" }}>
        <Grid container>
          <Grid item xs={12} sm={6} p={1}>
            <Form onSubmit={handleSubmit((data) => console.log(data))} control={control}>
              <Stack direction={'column'} spacing={3}>
                {/* Title */}
                <Box>
                  <TextField 
                    fullWidth 
                    id='title'
                    label='Tiêu đề'
                    size='small'
                    { ...register('title', {
                        required: 'Tiêu đề không được bỏ trống',
                        minLength: {
                          value: 10,
                          message: 'Tiêu đề video quá ngắn'
                        }
                      })
                    }
                  />
                  { errors.title && <TypographyStyle variant='subtitle2' component={'p'}>{errors.title.message}</TypographyStyle>}
                </Box>

                {/* Chuyên ngành */}
                <Box>
                  <FormControl fullWidth size='small'>
                    <InputLabel id='major-label'>Chuyên ngành</InputLabel>
                    <Select
                      fullWidth
                      id='major'
                      labelId='major-label'
                      label='Chuyên ngành'
                      { ...register('major', {
                        required: 'Chuyên ngành không được bỏ trống'
                      }) }
                    >
                      <MenuItem value=''>None</MenuItem>
                      <MenuItem value='Thiết kế website'>Thiết kế website</MenuItem>
                      <MenuItem value='Lập trình mobile'>Lập trình mobile</MenuItem>
                      <MenuItem value='Ứng dụng phần mềm'>Ứng dụng phần mềm</MenuItem>
                    </Select>
                    { errors.major && <TypographyStyle variant='subtitle2' component={'p'}>{errors.major.message}</TypographyStyle>}
                  </FormControl>
                </Box>

                {/* Người kiểm duyệt */}
                <Box>
                  <FormControl fullWidth size='small'>
                    <InputLabel id='censor-label'>Người kiểm duyệt</InputLabel>
                    <Select
                      fullWidth
                      id='censor'
                      labelId='censor-label'
                      label='Người kiểm duyệt'
                      placeholder='Người kiểm duyệt'
                      { ...register('censor', {
                        required: 'Người kiểm duyệt không được bỏ trống'
                      }) }
                    >
                      <MenuItem value=''>None</MenuItem>
                      <MenuItem value='Lê Anh Tú'>Lê Anh Tú</MenuItem>
                      <MenuItem value='Thân Hoàng Lộc'>Thân Hoàng Lộc</MenuItem>
                      <MenuItem value='Nguyễn Thanh Phước'>Nguyễn Thanh Phước</MenuItem>
                    </Select>
                  </FormControl>
                  { errors.censor && <TypographyStyle variant='subtitle2' component={'p'}>{errors.censor.message}</TypographyStyle>}
                </Box>

                {/* Công nghệ sử dụng */}
                <Box>
                  <FormControl fullWidth size='small'>
                    <InputLabel id='tech-label'>Công nghệ</InputLabel>
                    <Select
                      fullWidth
                      id='tech'
                      labelId='tech-label'
                      label='Công nghệ'
                      { ...register('tech', {
                        required: 'Công nghệ sử dụng không được bỏ trống'
                      }) }
                    >
                      <MenuItem value=''>None</MenuItem>
                      <MenuItem value='Java'>Java</MenuItem>
                      <MenuItem value='Spring Boot'>Spring Boot</MenuItem>
                      {/* <MenuItem value='HTML/CSS'>HTML/CSS</MenuItem>
                      <MenuItem value='JavaScrip'>JavaScrip</MenuItem>
                      <MenuItem value='AngularJS'>AngularJS</MenuItem>
                      <MenuItem value='Bootstrap'>Bootstrap</MenuItem>
                      <MenuItem value='JPA/Hibernate'>JPA/Hibernate</MenuItem> */}
                    </Select>
                  </FormControl>           
                  { errors.tech && <TypographyStyle variant='subtitle2' component={'p'}>{errors.tech.message}</TypographyStyle>}   
                </Box>

                {/* Github */}
                <Box>
                  <TextField 
                    fullWidth 
                    id='github'
                    label='Link Github (Optional)'
                    size='small'
                  />
                </Box>

                {/* Github */}
                <Box>
                  <input type='file' accept='.rar,.zip,.doc,.docx,.txt,.tar'/>
                </Box>

                <Button variant='contained' type='submit'>Submit</Button>
              </Stack>
            </Form>
          </Grid>
          <Grid item xs={12} sm={6} p={1}></Grid>
        </Grid>
      </AspectRatio>
    </Box>
  )
}

export default ProjectDetailPanel