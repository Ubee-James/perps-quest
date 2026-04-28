// app/api/prices/route.ts
import { NextRequest, NextResponse } from 'next/server'

const COIN_IDS: Record<string, string> = {
  bitcoin: 'bitcoin',
  ethereum: 'ethereum',
  solana: 'solana',
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const coin = searchParams.get('coin') || 'bitcoin'

  // Validate coin to prevent abuse
  if (!COIN_IDS[coin]) {
    return NextResponse.json({ error: 'Unknown coin' }, { status: 400 })
  }

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=30&interval=daily`,
      {
        headers: {
          'Accept': 'application/json',
          // If you get a CoinGecko Pro API key later, add it here:
          // 'x-cg-pro-api-key': process.env.COINGECKO_API_KEY ?? '',
        },
        next: { revalidate: 300 }, // cache for 5 minutes
      }
    )

    if (!res.ok) {
      throw new Error(`CoinGecko returned ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)

  } catch (err) {
    console.error('Price fetch error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch price data' },
      { status: 500 }
    )
  }
}