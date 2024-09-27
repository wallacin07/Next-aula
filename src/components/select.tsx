import { Select } from '@headlessui/react'

export default function Example() {
  return (
    <Select name="status" aria-label="Project status">
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </Select>
  )
}