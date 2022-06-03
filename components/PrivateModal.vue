<template>
  <div class="private-modal">
    <span class="private-modal__text"
      >To view private photos simply make contact with this member.</span
    >
    <span class="private-modal__text"
      >Write a letter and get replay, or get in toush right now via live
      chat!</span
    >
    <button class="private-modal__button">Start live chat</button>
  </div>
</template>

<script>
export default {
  name: "PrivateModal",
};
</script>

<style lang="scss">
.private-modal {
  z-index: 1051;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: calc(50% - 62px);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 12px;
  width: 100%;
  max-width: 192px;
  background-color: white;
  border: 1px solid #03045e;
  box-shadow: 0 4px 15px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  @media (min-width: 760px) {
    padding: 28px 12px;
    max-width: 386px;
    top: calc(50% - 88px);
  }

  &__text {
    display: block;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    @media (min-width: 760px) {
      margin-bottom: 10px;
    }
  }

  &__text:last-child {
    margin-bottom: 12px;
    @media (min-width: 760px) {
      margin-bottom: 20px;
    }
  }

  &__button {
    max-width: 160px;
    width: 100%;
    padding: 8px 0;
    background-color: #03045e;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15),
      inset 0 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    color: white;
    border: 1px solid #03045e;
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #03045e;
    }
  }
}
</style>
