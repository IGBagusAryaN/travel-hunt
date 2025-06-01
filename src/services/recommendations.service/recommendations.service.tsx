import { create } from 'zustand'

interface PlaceScore {
  score: number
  criteriasId: string
}

interface Recommendation {
  id: string
  name: string
  category: string
  image_url: string
  description: string
  place_scores: PlaceScore[]
  totalScore: number
}

interface RecommendationStore {
  data: Recommendation[]
  setData: (data: Recommendation[]) => void
  clearData: () => void
}

export const useRecommendationStore = create<RecommendationStore>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  clearData: () => set({ data: [] }),
}))
