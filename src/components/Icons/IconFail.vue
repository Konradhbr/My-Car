<template>
  <svg
    width="86px"
    height="86px"
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>Radial</title>
    <defs>
      <circle id="path-1" cx="20" cy="20" r="27"></circle>
      <filter
        x="-106.2%"
        y="-66.2%"
        width="312.5%"
        height="312.5%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feOffset
          dx="0"
          dy="16"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="11.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.945098039   0 0 0 0 0.0274509804   0 0 0 0 0.305882353  0 0 0 0.35 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Symbols"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Radial" transform="translate(23.000000, 7.000000)">
        <g id="Oval">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-2)"
            xlink:href="#path-1"
          ></use>
          <use fill="#F1074E" fill-rule="evenodd" xlink:href="#path-1"></use>
        </g>
        <g
          id="Group"
          transform="translate(9.000000, 9.000000)"
          stroke="#FFFFFF"
          stroke-linecap="round"
          stroke-width="1.6"
        >
          <g id="Icon">
            <path
              d="M10.9770508,3.5 L10.9770508,18.5 M18.5,10.9963379 L3.5,10.9963379"
              id="Combined-Shape"
              transform="translate(11.000000, 11.000000) rotate(-315.000000) translate(-11.000000, -11.000000) "
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconFail"
};
</script>

<style></style>
