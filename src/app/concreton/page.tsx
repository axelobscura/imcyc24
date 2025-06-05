"use client";

import styles from "./page.module.css";
import React, { useState, useRef } from 'react';
import PromptForm from "../components/PromptForm";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Image from "next/image";

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
    <main className={styles.main}>
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
        <p className={styles.subtitulo}>Instituto Mexicano del Cemento y del Concreto A.C.</p>
        {choices.map((choice: Choice) => {
          return (
        <div className={styles.response} ref={contentRef} key={choice.index}>
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{
          pre: (props: React.HTMLProps<HTMLPreElement>) => (
            <pre className={styles.codeBlock} {...props} />
          ),
          code: (props: React.HTMLProps<HTMLElement> & { inline?: boolean }) => {
            // @ts-expect-error: 'inline' is not a standard prop on HTMLElement, but is used by react-markdown
            const { inline, ...rest } = props;
            return (
              <code className={inline ? styles.inlineCode : styles.codeContent} {...rest} />
            );
          },
            }}
          >
            {choice.message.content}
          </ReactMarkdown>
        </div>
          );
        })}
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
      </div>
    </main>
  );
}
