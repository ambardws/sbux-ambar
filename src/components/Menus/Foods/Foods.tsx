import React from 'react'
import { Card } from '../components/Card/Card'


export default function Foods() {
  return (
    <div className="space-y-2">
      <h1 className="text-[#3C405F] font-medium text-base">Foods</h1>
      <Card name="Sandwich" />
      <Card name="Baked" />
    </div>
  )
}
