import { defineEventHandler } from 'h3'
import githubData from '../../app/data/githubData.json'

export default defineEventHandler(async () => {
  return githubData
})
