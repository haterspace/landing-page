import React from 'react';
import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    setSelectedValue('');
    reset();
  };

  return (
    <>
      <Typography
        id='fbform'
        sx={{
          width: '570px',
          height: '60px',
          borderRadius: '30px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '1740px',
          left: '32%',
          fontFamily: 'monospace',
          letterSpacing: '4px',
          fontSize: '30px',
        }}
      >
        Форма обратной связи
      </Typography>
      <Grid
        sx={{
          position: 'absolute',
          top: '1850px',
          left: '34%',
          width: '500px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px black',
        }}
        component='form'
        container
        direction='column'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label='Имя'
          InputProps={{
            sx: { borderRadius: 4, marginBottom: 3 },
          }}
          {...register('name', {
            required: 'Обязательное поле',
            maxLength: 20,
          })}
        />
        {errors.name && (
          <div
            style={{
              position: 'absolute',
              margin: '55px 0 0 15px',
              color: 'red',
            }}
          >
            {errors.name.message}
          </div>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <div
            style={{
              position: 'absolute',
              margin: '55px 0 0 15px',
              color: 'red',
            }}
          >
            Вы превысили максимальную длину строки в 20 символов
          </div>
        )}

        <Select
          sx={{ marginBottom: '25px' }}
          value={selectedValue}
          onChange={handleChange}
          displayEmpty
          required
        >
          <MenuItem value='' disabled>
            <em>Выберите способ получения обратной связи</em>
          </MenuItem>
          <MenuItem value={'call'}>Звонок на телефон</MenuItem>
          <MenuItem value={'email'}>Электронная почта</MenuItem>
        </Select>
        {selectedValue === 'email' && (
          <>
            <TextField
              InputProps={{ sx: { borderRadius: 4, marginBottom: 3 } }}
              label='Введите ваш email'
              {...register('email', {
                required: 'Обязательное поле',
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                  message: 'Введите корректный email',
                },
              })}
            />
            {errors.email && (
              <div
                style={{
                  position: 'absolute',
                  margin: '216px 0 0 15px',
                  color: 'red',
                }}
              >
                {errors.email.message}
              </div>
            )}
          </>
        )}
        {selectedValue === 'call' && (
          <>
            <TextField
              InputProps={{ sx: { borderRadius: 4, marginBottom: 3 } }}
              label={'Введите ваш номер телефона'}
              {...register('phone', {
                required: 'Обязательное поле',
                pattern: {
                  value: /^(\+7|8)\d{10}$/,
                  message: 'Введите корректный телефонный номер',
                },
              })}
            />
            {errors.phone && (
              <div
                style={{
                  position: 'absolute',
                  margin: '216px 0 0 15px',
                  color: 'red',
                }}
              >
                {errors.phone.message}
              </div>
            )}
          </>
        )}
        <TextField
          InputProps={{ sx: { borderRadius: 4, height: 230 } }}
          multiline
          rows={9}
          label='Кратко опишите ваш проект'
          {...register('desc', { required: 'Обязательное поле' })}
        />
        {errors.desc && (
          <div
            style={{
              position: 'sticky',
              margin: '0 0 0 15px',
              color: 'red',
            }}
          >
            {errors.desc.message}
          </div>
        )}
        <Button
          sx={{
            height: '40px',
            width: '150px',
            borderRadius: '15px',
            margin: '20px 0 0 150px',
          }}
          variant='contained'
          type='submit'
        >
          Отправить
        </Button>
      </Grid>
    </>
  );
}
