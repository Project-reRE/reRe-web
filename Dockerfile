# 1단계: 환경 설정 및 dependancy 설치
FROM node:22-alpine AS base
FROM base AS builder
WORKDIR /app

ARG BUILD_CONTEXT

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate 

RUN apk update

# # 2단계: next.js 빌드 단계
COPY . .

RUN pnpm install --frozen-lockfile

RUN cd ./apps/web

RUN pnpm build

CMD cd ./apps/web && pnpm start