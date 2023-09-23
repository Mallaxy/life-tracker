import { ComponentProps, FC, PropsWithChildren } from 'react'
import { Button, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

interface DeleteButtonProps extends PropsWithChildren, ComponentProps<typeof Button> {}

export const DeleteButton: FC<DeleteButtonProps> = ({ ...props }) => {
  return (
    <Button endIcon={<DeleteOutlineIcon />} {...props}>
      <Typography variant='body1'>Delete</Typography>
    </Button>
  )
}
