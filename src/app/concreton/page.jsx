"use client";

import styles from "./page.module.css";
import React, { useState, useRef } from 'react';
import PromptForm from "../components/PromptForm";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Image from "next/image";

export default function Home() {
  const [choices, setChoices] = useState([]);
  const [chainedChoices, setChainedChoices] = useState([]);
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
        {choices.map((choice) => {
          return (
            <div className={styles.response} ref={contentRef} key={choice.index}>
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                components={{
                  pre: ({ node, ...props }) => (
                    <pre className={styles.codeBlock} {...props} />
                  ),
                  code: ({ node, inline, ...props }) => (
                    <code className={inline ? styles.inlineCode : styles.codeContent} {...props} />
                  ),
                }}
              >
                {choice.message.content}
              </ReactMarkdown>
            </div>
          );
        })}
        <PromptForm
          isLoading={isLoading}
          handleCopy={handleCopy}
          onSubmit={async (prompt) => {
            setIsLoading(true);
            const response = await fetch("/api/chat-gpt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt,
              }),
            });

            setIsLoading(false);
            const result = await response.json();
            setChainedChoices([...chainedChoices, result.choices]);

            setChoices(result.choices);
          }}
        />
      </div>
    </main>
  );
}
