import { Loader } from "@/components";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";
const Form = dynamic(() => import("@/components/Form"), { suspense: true });

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="contact">
        <Suspense fallback={<Loader />}>
          <Form />
        </Suspense>
      </main>
    </>
  );
};
export default Contact;
