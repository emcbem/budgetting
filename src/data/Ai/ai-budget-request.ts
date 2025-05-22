export interface AiBudgetRequest {
    overview: string, 
    aiBudgets: AiBudget[]
}

export interface AiBudget {
    name: string,
    description: string,
    incomePercentage: number
}