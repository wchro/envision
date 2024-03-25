"use server";

import { redirect } from "next/navigation";

export const Redirect = (link) => redirect(link);
