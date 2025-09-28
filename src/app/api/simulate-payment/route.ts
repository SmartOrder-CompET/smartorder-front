// src/app/api/simulate-payment/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID do pagamento obrigatório" }, { status: 400 });
    }

    // Chamada direta para a API REST do Mercado Pago (sandbox)
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`, // TEST_ACCESS_TOKEN
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    });

    const data = await response.json();

    return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
