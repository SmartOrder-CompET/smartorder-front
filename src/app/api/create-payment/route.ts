// src/app/api/create-payment/route.ts
import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

export async function POST(req: Request) {
  try {
    const { subtotal } = await req.json();

    const payment = await new Payment(client).create({
      body: {
        transaction_amount: Number(subtotal),
        description: "Compra no meu site",
        payment_method_id: "pix",
        payer: {
          email: "teste@teste.com", // ou pegue do usuário logado
        },
      },
    });

    return NextResponse.json(payment);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
