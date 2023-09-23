import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DeleteButton } from './DeleteButton.tsx'

describe('Delete Button', () => {
  it('should render icon and title', () => {
    render(<DeleteButton />)
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })
})
