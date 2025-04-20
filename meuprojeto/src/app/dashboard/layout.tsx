import e from "express";
import { title } from "process";

export const metadata = {
    title: "Painel do site",
    description: "Painel de controle",
}

export default function DashboardLayout({
    children,
}: {children: React.ReactNode }){
    return(
        <>
        <h3>Header do dashboard</h3>
        <br/>
        {children}
        </>
    )
}