"use client";

import styles from "./page.module.css";
import React, { useState, useRef } from "react";
import PromptForm from "../../components/PromptForm";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import MenuUsuarios from "../../components/MenuUsuarios";

export default function Home() {
  type Choice = {
    index: number;
    message: { content: string };
  };

  const [choices, setChoices] = useState<Choice[]>([]);
  const [chainedChoices, setChainedChoices] = useState<Choice[][]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
      <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-8 row-start-2 items-center sm:items-start z-0">
        <div className="text-center">
          <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr] gap-8 mt-1">
            <div className="mt-8 p-0 bg-slate-900 bg-opacity-90 rounded-lg shadow-lg">
              <MenuUsuarios />
            </div>
            <div className="mt-8 p-6 bg-slate-900 bg-opacity-75 rounded-lg shadow-lg">
              <div className={styles.card}>
                <div className={styles.logoContainer}>
                  <Image
                    src="/concreton-Supervisor.png"
                    alt="Logo"
                    width={105}
                    height={205}
                    className={styles.logo}
                  />
                </div>
                <p className={styles.titulo}>ASISTENTE CONCRETÓN</p>
                <p className={styles.subtitulo}>
                  Instituto Mexicano del Cemento y del Concreto A.C.
                </p>
                <PromptForm
                  isLoading={isLoading}
                  onSubmit={async (prompt: string) => {
                    setIsLoading(true);
                    const response: Response = await fetch("/api/chat-gpt", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        prompt,
                      }),
                    });

                    setIsLoading(false);
                    interface ApiResponse {
                      choices: Choice[];
                    }
                    const result: ApiResponse = await response.json();
                    setChainedChoices([...chainedChoices, result.choices]);

                    setChoices(result.choices);
                  }}
                />
                <hr />
                {choices.map((choice: Choice) => {
                  return (
                    <div
                      className={styles.response}
                      ref={contentRef}
                      key={choice.index}
                    >
                      <ReactMarkdown
                        rehypePlugins={[rehypeHighlight]}
                        components={{
                          pre: (props: React.HTMLProps<HTMLPreElement>) => (
                            <pre className={styles.codeBlock} {...props} />
                          ),
                          code: (
                            props: React.HTMLProps<HTMLElement> & {
                              inline?: boolean;
                            }
                          ) => {
                            const { inline, ...rest } = props;
                            return (
                              <code
                                className={
                                  inline
                                    ? styles.inlineCode
                                    : styles.codeContent
                                }
                                {...rest}
                              />
                            );
                          },
                        }}
                      >
                        {choice.message.content}
                      </ReactMarkdown>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
