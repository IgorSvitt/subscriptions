FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["subscriptionApi/subscriptionApi.csproj", "subscriptionApi/"]
RUN dotnet restore "subscriptionApi/subscriptionApi.csproj"
COPY . .
WORKDIR "/src/subscriptionApi"
RUN dotnet build "subscriptionApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "subscriptionApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "subscriptionApi.dll"]
